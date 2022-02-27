export const config = {
    development: {
        url: {
            giphy: "https://api.giphy.com/v1/gifs",
        },
        timeout: {
            giphy: {
                search: 2000,
                trending: 2000
            }
        },
    }, 
    production: {
        url: {
            giphy: "https://api.giphy.com/v1/gifs",
        },
        timeout: {
            giphy: {
                search: 1000,
                trending: 1000
            }
        },
    }
}