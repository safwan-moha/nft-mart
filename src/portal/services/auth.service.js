const login = async function(params) {
    document.cookie = 'api=; Max-Age=-999; path=/;' 
    try {
        const branch = [ ];
        localStorage.setItem("mw-b", JSON.stringify(branch));
        localStorage.setItem("mw-u", params.username);
        // console.log('3 ', document.cookie)
        document.cookie = `api=${'sometoken'}; max-age=${15 * 60 * 60 * 1000}; path=/;`;
        // console.log('4 ', document.cookie)
        return true;
    } catch (e) {
        throw e;
    }
};
  
const logout = async function() {
    localStorage.clear();
    document.cookie = 'api=; Max-Age=-999; path=/;'
};

const getAuthedUser = async function() {
    try {
        let user = localStorage.getItem("mw-u");
		return user;
    } catch (fetchError) {
        throw fetchError;
    }
};

export default {
    login,
    logout,
    getAuthedUser
};
