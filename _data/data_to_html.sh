awk 'BEGIN{
    FS="^"
    print "<TABLE id=\"myTable\" border=2>"
}

{
    print "<TR>"
    for(i=1;i<=NF;i++)
    {
	if(NR==1)
	    print "<th style=\"text-align: center;\">" $i "</th>"
        if(NR!=1 && i==NF)
            print "<td><a href=\"" $i "\">Link</td>"
	if(NR!=1 && i!=NF)
	    print "<td>" $i "</td>"
    }
    print "</TR>"
}
END{
    print "</TABLE>"
}' publications.csv > ../_includes/publications_table.html
