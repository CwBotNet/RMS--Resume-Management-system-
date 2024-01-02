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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"

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

    // const deleteACandidate = async () => {
    //     try {
    //         axios.delete(apiUrl)
    //             .then()
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }

    // console.log(apiData);


    return (
        <div>
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
                            <div className=" flex gap-6 mt-1">
                                <span className="text-center">
                                    <Button variant={"Edit"}>
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
                        <TableCell colSpan={9}>Total Candidate</TableCell>
                        <TableCell className="text-right">{apiData.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
