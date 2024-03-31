import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

//To prevent from caching
export const revalidate = 0;

const HomePage = async () => {
    
    const billboard = await getBillboard("");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    )
}

export default HomePage;