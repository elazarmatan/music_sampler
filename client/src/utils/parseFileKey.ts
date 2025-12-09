export default function parseFileKey(key:string){
    const parts = key.split('/')
    const fileWithDate = parts[1]

    const match = fileWithDate.search(/\d/)
    if(match === -1) throw new Error('not match')
    const fileName = fileWithDate.slice(0,match)
    const createdAt = fileWithDate.slice(match)
    return{fileName,createdAt}
}