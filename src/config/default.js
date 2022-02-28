export const config = {
    development: {
        url: {
            giphy: "https://api.giphy.com/v1/gifs",
        },
        timeout: {
            giphy: {
                search: 5000,
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
                search: 5000,
                trending: 3000
            }
        },
    }
}