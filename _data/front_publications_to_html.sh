awk 'BEGIN{
    FS="^"
    print "<ul>"
}

{
    print "<li>"
    for(i=1;i<=NF;i++)
    {
        print $i
    }
    print "</li>"
}
END{
    print "</ul>"
}' front_publications.txt > ../_includes/front_publications.html
