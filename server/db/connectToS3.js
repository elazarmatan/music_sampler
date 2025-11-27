import { S3Client,ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


const s3 = new S3Client({
    endpoint:process.env.ENDPOINTS3,
    region: "us-east-1",
    forcePathStyle: true,
    credentials:{
        accessKeyId:process.env.AceesKeyId,
        secretAccessKey:process.env.SecretKey
    }
})

export async function listFiles(folderName){
    const command = new ListObjectsV2Command({
        Bucket:"music",
        Prefix:folderName
    })
    const response = await s3.send(command)
    return response.Contents
}


export async function getSignedUrlsFromFolder(prefix){
    const files = await listFiles(prefix)

    const urls = await Promise.all(
        files.map(async(file) =>{
            const command = new GetObjectCommand({
                Bucket:"music",
                Key:file.Key
            })
            return await getSignedUrl(s3,command,{ expiresIn: 3600 })
        })
    )
    return urls
}

