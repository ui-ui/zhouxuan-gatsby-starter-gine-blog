module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/a918022f764a4e2dbe09991683ae0409?v=1bb7a8ac35f64e1a97fcdfe7b7ddb3cb"
                
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/e691f98804b043dabc3fd179870d5b74?v=9b6f335dc69145edab011f5e3f737599"
            }
        }
    ],
}
