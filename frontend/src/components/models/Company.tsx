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
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import PopUpFormCompany from "../PopUpFormCompany";
import { deleteCompany, getAllCompany } from "@/services/api/company.api";
import { dateFormate } from "@/helpers/dateFormater";



export function Company() {
    const [companyData, setCompanyData] = useState<any>([]);
    const [isDeleted, setIsDeleted] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const company = await getAllCompany()
            setCompanyData(company)

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

    const handeEventdelete = async (id: string) => {
        try {
            // setError(false)
            setIsDeleted(false);
            const response = await deleteCompany(id)
            if (response.status == 200) {
                setIsDeleted(true)
                console.log("delete job " + id)
            } else if (isDeleted) {
                setIsDeleted(false)
                console.log(isDeleted);
            }

        } catch (error) {
            // setError(true)
            console.log(error);
        }
    };



    return (
        <div className="">
            <div className='flex justify-end mb-4' onClick={handelEventUpdate}>
                <PopUpFormCompany PostMethod="post" name="Add" button="Add Company +" />
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
                            <TableCell className="text-center">{dateFormate(data.createdAt)}</TableCell>
                            <div className=" flex gap-8 justify-end mt-1">
                                <span className="text-center">
                                    <span className="text-center" onClick={handelEventUpdate} >
                                        <PopUpFormCompany id={data.id} name="Update" lableFor="Company ID" level="Job level" button={<FontAwesomeIcon icon={faPenToSquare} />} />
                                    </span>
                                </span>
                                <span className="">
                                    <Button onClick={() => { handeEventdelete(data.id) }} variant={"destructive"}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </span>
                            </div>


                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>Total company</TableCell>
                        <TableCell className="text-center">{companyData.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
