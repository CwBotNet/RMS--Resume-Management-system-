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
import { Button } from "@/components/ui/button";

import axios from "axios"
import { useEffect, useState } from "react"

export function Jobs() {
    const [jobsData, setJobsData] = useState([]);
    const ApiUrl = "https://localhost:44387/api/Job/GetJob"
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(ApiUrl)
                .then(responce => {
                    setJobsData(responce.data);
                    // console.log(responce.data);

                })
                .catch(error => {
                    console.log(`Jobs Api data fetching error ${error}`);

                })
        }
        fetchData()
    }, [])
    // console.log(jobsData);

    return (
        <div className="">
            <div className="flex justify-end mb-4">
                <Button variant={"Primary"}>Add Jobs +</Button>
            </div>
            <Table>
                <TableCaption>A list of Jobs.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead className="text-center">Job Title</TableHead>
                        <TableHead className="text-center">Job level</TableHead>
                        <TableHead className="text-center w-[120px]">Company ID</TableHead>
                        <TableHead className="text-center">Company Name</TableHead>
                        <TableHead className="text-center">Creted At</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {jobsData.map((data: any) => (
                        <TableRow key={data.id}>
                            <TableCell className="font-medium">{data.id}</TableCell>
                            <TableCell className="text-center">{data.title}</TableCell>
                            <TableCell className="text-center">{data.level}</TableCell>
                            <TableCell className="text-center">{data.companyId}</TableCell>
                            <TableCell className="text-center">{data.companyName}</TableCell>
                            <TableCell className="text-center">{data.createdAt}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={5}>Total Jobs</TableCell>
                        <TableCell className="text-center">{jobsData.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
