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

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import PopupForm from "@/components/PopupForm";
import { ICreateJobDto, IJob } from "@/types/global.typing";
import httpModule from "@/helpers/http.module";

export function Jobs() {
    const [jobsData, setJobsData] = useState<IJob[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState<Boolean>(false)
    const [job, setjob] = useState<ICreateJobDto>({ title: "", level: "", companyId: "" })
    const baseUrl = "https://localhost:44387/api"



    // crud request

    // create
    useEffect(() => {
        ; (async () => {
            await httpModule.post("/Job/CreateJob")

        })()
    }, [])

    // Read
    useEffect(() => {

        //  usning IIFE (Imadetaly invoke function exprssion)
        ; (async () => {
            try {
                const responce = await httpModule.get<IJob[]>('/Job/GetJob')
                setJobsData(responce.data);
            } catch (e) {
                setError(true)
                console.log(`Jobs Api data fetching error ${e}`)
            }
        })()
    }, [])

    // Update


    // Delete
    const handelPutResquest = async (id: any) => {


        try {
            await httpModule.put(`${baseUrl}/Job/UpdateJob/${id}`, {
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


    if (error) {
        return <div>Something went wrong!</div>;
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
                                    <PopupForm button={<FontAwesomeIcon icon={faPenToSquare} />} />
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
