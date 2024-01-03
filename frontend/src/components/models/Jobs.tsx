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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { error } from "console";

export function Jobs() {
    const [jobsData, setJobsData] = useState([]);
    const baseUrl = "https://localhost:44387/api"
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${baseUrl}/Job/GetJob`)
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

    // delete function

    const handelPutResquest = async (id: any) => {

        const data = {
            Title: "mmbs",
            Level: "cto",
            CompanyId: 5
        }


        try {
            await axios.put(`${baseUrl}/Job/UpdateJob/${id}`, {
                Title: "mmbs",
                Level: "cto",
                CompanyId: 5
            }).then((responce) => {
                console.log(responce.data);

            }).catch((error) => {
                console.log(error);

            })

        } catch (error) {

        }

        // console.log();



    }
    handelPutResquest(1)

    // console.log(jobsData);

    return (
        <div className="">
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
                            <div className=" flex gap-6 mt-1">
                                <span className="text-center">
                                    <Button onClick={handelPutResquest} variant={"Edit"}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </Button>
                                </span>
                                <span className="">
                                    <Button variant={"destructive"}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </span>
                            </div>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={6}>Total Jobs</TableCell>
                        <TableCell className="text-center">{jobsData.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
