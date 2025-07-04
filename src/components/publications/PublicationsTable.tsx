import DebouncedInput from "@site/src/components/common/DebouncedInput";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Publication,
  PublicationAuthor,
  PublicationTag,
  PublicationType,
} from "@site/src/types";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Tag from "../common/Tag";
import styles from "./PublicationsTable.module.css";

const ACCESSOR_SEPARATOR = ", ";

type PublicationsTableProps = {
  data: Publication[];
  isFooterVisible?: boolean;
  isSearchInputVisible?: boolean;
  isTagsColumnVisible?: boolean;
};

function ActiveColumnFilters({
  columnFilters,
  getColumn,
}: {
  columnFilters: ColumnFiltersState;
  getColumn: (columnId: string) => Column<Publication>;
}) {
  const removeFilter = useCallback(
    (columnId: string, removedValue: string) => {
      const column = getColumn(columnId);
      const filterValue = column.getFilterValue();
      if (filterValue instanceof Array) {
        const newFilterValue = filterValue.filter(
          (value) => value !== removedValue
        );
        if (newFilterValue.length === 0) {
          column.setFilterValue(undefined);
        } else {
          column.setFilterValue(newFilterValue);
        }
      } else {
        column.setFilterValue(undefined);
      }
    },
    [getColumn]
  );
  if (columnFilters.length === 0) return null;
  columnFilters.sort((a, b) => a.id.localeCompare(b.id));
  return (
    <div className={clsx("margin-bottom--md", styles.filters)}>
      {columnFilters.map((filter) => (
        <span key={filter.id} className="badge badge--primary margin-right--sm">
          <span className={styles.filterId}>{`${filter.id}:`}</span>
          {filter.value instanceof Array
            ? filter.value.map((value) => (
                <Fragment key={value}>
                  <span className="margin-left--sm">{`${value} `}</span>
                  <FontAwesomeIcon
                    className={styles.filterRemove}
                    icon={faXmark}
                    onClick={() => removeFilter(filter.id, value)}
                  />
                </Fragment>
              ))
            : String(filter.value)}
        </span>
      ))}
    </div>
  );
}

function Authors({
  column,
  data,
}: {
  column: Column<Publication, string>;
  data: PublicationAuthor[];
}) {
  const addFilter = useCallback(
    (author: PublicationAuthor) => {
      const filterValue = (column.getFilterValue() ||
        []) as PublicationAuthor[];
      if (!filterValue.includes(author)) {
        column.setFilterValue([...filterValue, author]);
      }
    },
    [column, data]
  );
  return data.map((author, i) => (
    <Fragment key={`author-${i}`}>
      <span className={styles.author} onClick={() => addFilter(author)}>
        {author}
      </span>
      {i !== data.length - 1 && ", "}
      {i !== data.length - 1 && <br />}
    </Fragment>
  ));
}

function Links({ data }: { data: Record<string, string> }) {
  if (Object.keys(data).length === 0) return "TBA";
  return (
    <div className={styles.links}>
      {Object.entries(data).map(([key, value], i) => (
        <Fragment key={`link-${i}`}>
          <a className={styles.link} href={value} target="_blank">
            {key === "pdf" ? "PDF" : key === "bibtex" ? "BibTeX" : key}
          </a>
          {i !== Object.keys(data).length - 1 && ", "}
          {i !== Object.keys(data).length - 1 && <br />}
        </Fragment>
      ))}
    </div>
  );
}

function Tags({
  column,
  data,
}: {
  column: Column<Publication, string>;
  data: PublicationTag[];
}) {
  const addFilter = useCallback(
    (tag: PublicationTag) => {
      const filterValue = (column.getFilterValue() || []) as PublicationTag[];
      if (!filterValue.includes(tag)) {
        column.setFilterValue([...filterValue, tag]);
      }
    },
    [column, data]
  );
  if (data.length === 0 || (data[0] as string) === "") return null;
  return (
    <div className={styles.tags}>
      {data.map((tag, i) => (
        <Tag
          className={clsx("margin-bottom--xs", styles.tag)}
          key={`tag-${i}`}
          onClick={() => addFilter(tag)}
          title={tag}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}

function Type({
  column,
  data,
}: {
  column: Column<Publication, PublicationType>;
  data: PublicationType;
}) {
  const addFilter = useCallback(
    (type: PublicationType) => {
      const filterValue = (column.getFilterValue() || []) as PublicationType[];
      if (!filterValue.includes(type)) {
        column.setFilterValue([...filterValue, type]);
      }
    },
    [column, data]
  );
  return (
    <span className={styles.type} onClick={() => addFilter(data)}>
      {data}
    </span>
  );
}

export default function PublicationsTable({
  data,
  isFooterVisible = true,
  isSearchInputVisible = true,
  isTagsColumnVisible = true,
}: PublicationsTableProps) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<Publication>[]>(() => {
    const columnHelper = createColumnHelper<Publication>();
    return [
      columnHelper.accessor((row) => row.authors.join(ACCESSOR_SEPARATOR), {
        cell: (info) => (
          <Authors
            column={info.column}
            data={
              info.getValue().split(ACCESSOR_SEPARATOR) as PublicationAuthor[]
            }
          />
        ),
        enableSorting: false,
        filterFn: (row, columnId, filterValue: PublicationAuthor[]) => {
          const rowAuthors = row
            .getValue<string>(columnId)
            .split(ACCESSOR_SEPARATOR) as PublicationAuthor[];
          return filterValue.every((author) => rowAuthors.includes(author));
        },
        header: "Authors",
        id: "authors",
      }),
      columnHelper.accessor("title", {
        cell: (info) => info.getValue(),
        header: "Title",
        id: "title",
      }),
      columnHelper.accessor("venue", {
        cell: (info) => info.getValue(),
        header: "Venue",
        id: "venue",
      }),
      columnHelper.accessor("type", {
        cell: (info) => <Type column={info.column} data={info.getValue()} />,
        filterFn: (row, columnId, filterValue: PublicationType[]) => {
          const rowType = row.getValue<PublicationType>(columnId);
          return filterValue.includes(rowType);
        },
        header: "Type",
        id: "type",
      }),
      columnHelper.accessor("date", {
        cell: (info) => info.getValue(),
        header: "Date",
        id: "date",
      }),
      isTagsColumnVisible &&
        columnHelper.accessor((row) => row.tags.join(ACCESSOR_SEPARATOR), {
          cell: (info) => (
            <Tags
              column={info.column}
              data={
                info.getValue().split(ACCESSOR_SEPARATOR) as PublicationTag[]
              }
            />
          ),
          enableSorting: false,
          filterFn: (row, columnId, filterValue: PublicationAuthor[]) => {
            const rowTags = row
              .getValue<string>(columnId)
              .split(ACCESSOR_SEPARATOR) as PublicationAuthor[];
            return filterValue.every((tag) => rowTags.includes(tag));
          },
          header: "Tags",
          id: "tags",
        }),
      columnHelper.accessor("links", {
        cell: (info) => <Links data={info.getValue()} />,
        header: "Links",
        id: "links",
      }),
    ].filter(Boolean);
  }, []);

  const table = useReactTable({
    data,
    debugAll: false,
    columns,
    getCoreRowModel: getCoreRowModel<Publication>(),
    getFilteredRowModel: getFilteredRowModel<Publication>(),
    getSortedRowModel: getSortedRowModel<Publication>(),
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    state: {
      globalFilter,
      sorting,
    },
  });

  return (
    <div>
      {isSearchInputVisible && (
        <div className={styles.inputContainer}>
          <DebouncedInput
            className={styles.input}
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            placeholder="Seach publications"
          />
        </div>
      )}
      <ActiveColumnFilters
        columnFilters={table.getState().columnFilters}
        getColumn={table.getColumn}
      />
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col">
                  <div
                    {...{
                      onClick: header.column.getToggleSortingHandler(),
                      style: {
                        cursor: header.column.getCanSort()
                          ? "pointer"
                          : "default",
                      },
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isFooterVisible && (
        <div>
          <span>
            Showing {table.getRowModel().rows.length} of {data.length}{" "}
            publications
          </span>
        </div>
      )}
    </div>
  );
}
