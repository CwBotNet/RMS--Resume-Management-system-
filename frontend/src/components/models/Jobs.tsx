"use client"
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
import { IJob } from "@/types/global.typing";
import httpModule from "@/helpers/http.module";
import { dateFormate } from "@/helpers/dateFormater";
import { ScrollArea } from "../ui/scroll-area";


export function Jobs() {
    const [jobsData, setJobsData] = useState<IJob[]>([]);
    const [error, setError] = useState(false);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [loading, setLoading] = useState<Boolean>(false)


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
    }, [isDeleted, isUpdate])


    const handelEventUpdate = () => {
        if (isUpdate) {
            setIsUpdate(false)


        } else if (!isUpdate) {
            setIsUpdate(true)

        }
    }


    const handeEventdelete = async (id: string) => {
        try {
            setError(false)
            setIsDeleted(false);
            const responce = await httpModule.delete(`/Job/Delete/${id}`);
            if (responce.status == 200) {
                setIsDeleted(true)
                console.log("delete job " + id)
            } else if (isDeleted) {
                setIsDeleted(false)
                console.log(isDeleted);
            }

        } catch (error) {
            setError(true)
            console.log(error);
        }
    };




    if (error) {
        return <div>Something went wrong!</div>;
    }

    return (

        <div className="">
            <div className="flex justify-end mb-4" onClick={handelEventUpdate}>
                <PopupForm PostMethod="post" name="Add" button="Add Job +" lableFor="Company ID" level="Job level" />
            </div>
            <ScrollArea className="h-100">
                <Table>
                    <TableCaption>A list of Jobs.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">ID</TableHead>
                            <TableHead className="text-center">Job Title</TableHead>
                            <TableHead className="text-center">Job level</TableHead>
                            <TableHead className="text-center">Company Name</TableHead>
                            <TableHead className="text-center">Creted At</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {jobsData.map((data: any) => (
                            <TableRow key={data.id}>
                                <TableCell className="font-medium text-center">{data.id}</TableCell>
                                <TableCell className="text-center">{data.title}</TableCell>
                                <TableCell className="text-center">{data.level}</TableCell>
                                <TableCell className="text-center">{data.companyName}</TableCell>
                                <TableCell className="text-center">{dateFormate(data.createdAt)}</TableCell>
                                <TableCell className=" flex gap-6 justify-end mt-1">
                                    <span className="text-center" onClick={handelEventUpdate} >
                                        <PopupForm id={data.id} name="Update" lableFor="Company ID" level="Job level" button={<FontAwesomeIcon icon={faPenToSquare} />} />
                                    </span>
                                    <span className="">
                                        <Button onClick={() => { handeEventdelete(data.id) }} variant={"destructive"}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Button>
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow className="w-[400px]">
                            <TableCell colSpan={12} >Total Jobs</TableCell>
                            <TableCell className="text-right">  {jobsData.length}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </ScrollArea>
        </div >
    )
}
