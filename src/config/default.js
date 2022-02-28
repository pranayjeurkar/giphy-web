export const config = {
    development: {
        url: {
            giphy: "https://api.giphy.com/v1/gifs",
        },
        timeout: {
            giphy: {
                search: 10000,
                trending: 5000
            }
        },
    }, 
    production: {
        url: {
            giphy: "https://api.giphy.com/v1/gifs",
        },
        timeout: {
            giphy: {
                search: 7000,
                trending: 3000
            }
        },
    }
}