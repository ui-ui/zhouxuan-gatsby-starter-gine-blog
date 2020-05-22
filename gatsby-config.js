module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/1016b0c39b2944f7aade3ba0e7408413?v=45bb60ef861d45a49b1eda13089d643d"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/201ac69c6ef34780b31173235ad3c754?v=58be87c16fc94522ba7f339b34b2f51a"
            }
        }
    ],
}
