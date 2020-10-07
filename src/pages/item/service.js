export default ({

    async getCollaborator(id){
        try {

            const response = await fetch('http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/collaborator/' + id)
            const collaborator = await response.json()
            return collaborator;
        } catch (error) {
            console.log(error)
        }
    },

    async getFeedback(id){
        try {

            const response = await fetch('http://5d8b64ad3c0aaf0014342c2a.mockapi.io/api/v1/collaborator/' + id +'/feedback')
            const feedback = await response.json()
            return feedback;
        } catch (error) {
            console.log(error)
        }
    }


})