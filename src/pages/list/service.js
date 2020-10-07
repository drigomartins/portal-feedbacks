export default ({

    async getList(){
        try {
            const response = await fetch('http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/collaborator')
            const data = await response.json()
            return data;
        } catch (error) {
            console.log(error)
        }
    }

})