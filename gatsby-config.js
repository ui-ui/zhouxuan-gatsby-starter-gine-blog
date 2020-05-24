module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/9d40936c902c47ea864cbdf5eccccada?v=9ead4407cac245e9b6684b53a761dc60"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/73f33817efc64e1a86a9d1e6858c80eb?v=721809d8481a4059bb186f4f966fede3"
            }
        }
    ],
}
