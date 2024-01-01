import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button";



export function Company() {
    const [companyData, setCompanyData] = useState<any>([]);
    const ApiUri = "https://localhost:44387/api/Company/GetCompany";
    useEffect(() => {
        const fetchData = async () => {
            axios.get(ApiUri)
                .then(response => {
                    setCompanyData(response.data);
                    // console.log(response);

                }
                ).catch(error => {
                    console.log(error);

                })
        }
        fetchData();
    }, [])
    // console.log(companyData);

    return (
        <div className="container">
            <div className="flex justify-end mb-4">
                <Button variant={"Primary"}>Add company +</Button>
            </div>
            <Table>
                <TableCaption>A list of Companys.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">ID</TableHead>
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">size</TableHead>
                        <TableHead className="text-center">Created at</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companyData.map((data: any) => (
                        <TableRow key={data.id}>
                            <TableCell className="font-medium text-center">{data.id}</TableCell>
                            <TableCell className="font-medium text-center">{data.name}</TableCell>
                            <TableCell className="text-center">{data.size}</TableCell>
                            <TableCell className="text-center">{data.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total company</TableCell>
                        <TableCell className="text-center">{companyData.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
