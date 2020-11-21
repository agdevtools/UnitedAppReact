const getEnv = function() {

    const hostname = window.location.hostname;
    let myEnv = "";

    if (hostname.includes("local")) {
        myEnv = "local";
        return myEnv;
    }
    else return "heroku";
}

export  default getEnv;