export default  function getChannellocal(key:string){
    try {
        const raw = localStorage?.getItem(key)
        if(!raw) return null
        const data =  JSON.parse(raw)
        return data
    } catch (error) {
        return null
    }
}
