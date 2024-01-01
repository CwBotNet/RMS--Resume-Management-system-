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
import { Button } from "@/components/ui/button"

export function Candidate() {

    const [apiData, setApiData] = useState<any[]>([])
    const apiUrl = 'https://localhost:44387/api/Candidate/GetCandidate'
    useEffect(() => {
        const fetchData = async () => {
            axios.get(apiUrl)
                .then(responce => {
                    // handel the successfull data
                    setApiData(responce.data)
                    // console.log('data', responce.data);
                })
                .catch(error => {
                    console.log("fetching data error from api:", error);

                })
        }

        fetchData();
    }, [apiUrl])

    // console.log(apiData);


    return (
        <div>
            <div className="flex justify-end mb-4">
                <Button variant={"Primary"}>Add Candidates +</Button>
            </div>
            <Table>
                <TableCaption>A list of Job Candidates</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-center">Id</TableHead>
                        <TableHead className="text-center">First Name</TableHead>
                        <TableHead className="text-center">Last Name</TableHead>
                        <TableHead className="text-center">Email</TableHead>
                        <TableHead className="text-center">Phone</TableHead>
                        <TableHead className="text-center">Job Id</TableHead>
                        <TableHead className="text-center">Job Title</TableHead>
                        <TableHead className="text-center">Cover letter</TableHead>
                        <TableHead className="text-center">resume url</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {apiData.map((data: any) => (
                        <TableRow key={data.id}>
                            <TableCell className="text-center">{data.id}</TableCell>
                            <TableCell className="text-center">{data.firstName}</TableCell>
                            <TableCell className="text-center">{data.lastName}</TableCell>
                            <TableCell className="text-center">{data.email}</TableCell>
                            <TableCell className="text-center">{data.phone}</TableCell>
                            <TableCell className="text-center">{data.jobId}</TableCell>
                            <TableCell className="text-center">{data.jobTitle}</TableCell>
                            <TableCell className="text-center">{data.coverLetter}</TableCell>
                            <TableCell className="text-center">{data.resumeUrl}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={8}>Total Candidate</TableCell>
                        <TableCell className="text-right">{apiData.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
