export const config = {
    development: {
        url: {
            giphy: "https://api.giphy.com/v1/gifs",
        },
        timeout: {
            giphy: {
                search: 5000,
                trending: 300
            }
        },
    }, 
    production: {
        url: {
            giphy: "https://api.giphy.com/v1/gifs",
        },
        timeout: {
            giphy: {
                search: 3000,
                trending: 3000
            }
        },
    }
}