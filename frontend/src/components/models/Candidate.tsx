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

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faTrash } from "@fortawesome/free-solid-svg-icons"
import PopUpFormCandidate from "../PopUpFormCandidate"
import { DeleteCandidate, GetAllCandidate } from "@/services/api/candidate.api"
import { baseUrl } from "@/constants/url.constant"
import { dateFormate } from "@/helpers/dateFormater"

export function Candidate() {

    const [apiData, setApiData] = useState<any[]>([])
    const [isDeleted, setIsDeleted] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const Data = await GetAllCandidate()
            setApiData(Data)
            // console.log(Data);

        }

        fetchData();
    }, [isDeleted, isUpdate])

    const handelEventUpdate = () => {
        if (isUpdate) {
            setIsUpdate(false)


        } else if (!isUpdate) {
            setIsUpdate(true)

        }
    }


    const OnClickDelete = async (id: string) => {
        try {
            const response = await DeleteCandidate(id)
            if (response?.status == 200) {
                setIsDeleted(true);
                console.log(`candidate deleted successful id : ${id}`);
            } else {
                setIsDeleted(false)
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <div className='flex justify-end mb-4' onClick={handelEventUpdate}>
                <PopUpFormCandidate PostMethod="post" name="Add" button="Add candidate +" />
            </div>
            <Table>
                <TableCaption>A list of Job Candidates</TableCaption>
                <TableHeader>
                    <TableRow>
                        {/* <TableHead className="w-[100px] text-center">Id</TableHead> */}
                        <TableHead className="text-center">First Name</TableHead>
                        <TableHead className="text-center">Last Name</TableHead>
                        <TableHead className="text-center">Email</TableHead>
                        <TableHead className="text-center">Phone</TableHead>
                        {/* <TableHead className="text-center">Job Id</TableHead> */}
                        <TableHead className="text-center">Job Title</TableHead>
                        <TableHead className="text-center">Cover letter</TableHead>
                        <TableHead className="text-center">Created At</TableHead>
                        <TableHead className="text-center">resume url</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {apiData.map((data: any) => (
                        <TableRow key={data.id}>
                            {/* <TableCell className="text-center">{data.id}</TableCell> */}
                            <TableCell className="text-center">{data.firstName}</TableCell>
                            <TableCell className="text-center">{data.lastName}</TableCell>
                            <TableCell className="text-center">{data.email}</TableCell>
                            <TableCell className="text-center">{data.phone}</TableCell>
                            {/* <TableCell className="text-center">{data.jobId}</TableCell> */}
                            <TableCell className="text-center">{data.jobTitle}</TableCell>
                            <TableCell className="text-center">{data.coverLetter}</TableCell>
                            <TableCell className="text-center">{dateFormate(data.createdAt)}</TableCell>
                            <TableCell className="text-center">
                                <a className="text-green-400/60 hover:text-green-300/70" title="pdflink" href={`${baseUrl}/Candidate/Download/${data.resumeUrl}`} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon size={"2x"} icon={faFilePdf} />
                                </a></TableCell>
                            <div className=" flex gap-6 pt-1 pl-8 mt-1.5">

                                {/* update form */}
                                {/* <span className="text-center" >
                                    <PopUpFormCandidate id={data.id} name="Update" lableFor="Company ID" level="Job level" button={<FontAwesomeIcon icon={faPenToSquare} />} />
                                </span> */}
                                <span className="">
                                    <Button onClick={() => { OnClickDelete(data.id); }} variant={"destructive"}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </span>
                            </div>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={10}>Total Candidate</TableCell>
                        <TableCell className="text-right">{apiData.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
