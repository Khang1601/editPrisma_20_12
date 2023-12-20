import { AvailableStatus, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    // console.log("da vao seed.ts");

    try {
        let seedCategory = await prisma.categories.create({
            data: {
                title: "Seed Category",
                avatar: "seedcategory.png",
                description: "xyz",
                status: AvailableStatus.active,
                createAt: String(Date.now()),
                updateAt: String(Date.now())
            }
        })
        return seedCategory;
    } catch (error) {
        console.log("error",error);
        return error;
    }  
}

main();