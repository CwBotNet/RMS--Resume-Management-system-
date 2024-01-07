import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from "react"
import { ICreateCandidateDto, IJob } from "@/types/global.typing"
import httpModule from "@/helpers/http.module"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { CreateCandidate, UpdateCandidate } from "@/services/api/candidate.api"


// let role = ["Intern", "Junior", "MidLevel", "Senior", "TeamLead", "Cto", "Architect"]

const PopUpFormCandidate = (props: any) => {
    const [job, setJob] = useState<IJob[]>([]);
    const [pdfFile, setPdfFile] = useState<File | null>();
    const [candidate, setCandidate] = useState<ICreateCandidateDto>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobId: "",
        coverLetter: "",
    })


    useEffect(() => {
        ; (async () => {
            try {
                const response = await httpModule.get<IJob[]>("/Job/GetJob");
                setJob(response.data)
                return response.data;
            } catch (error) {
                console.log(error);

            }
        })()
    }, [])

    const handleOnClick = (id: string) => {


        if (
            candidate.firstName === "" ||
            candidate.lastName === "" ||
            candidate.email === "" ||
            candidate.phone === "" ||
            candidate.coverLetter === "" ||
            candidate.jobId === "" ||
            !pdfFile
        ) {
            alert("Please fill all fields")
        } else if (props.PostMethod == "post") {
            const newCandidateFormData = new FormData();
            newCandidateFormData.append("firstName", candidate.firstName);
            newCandidateFormData.append("lastName", candidate.lastName);
            newCandidateFormData.append("email", candidate.email);
            newCandidateFormData.append("phone", candidate.phone);
            newCandidateFormData.append("coverLetter", candidate.coverLetter);
            newCandidateFormData.append("jobId", candidate.jobId);
            newCandidateFormData.append("pdfFile", pdfFile);
            // CreateCandidate(newCandidateFormData);
            httpModule.post("/Candidate/CreateCandidate", newCandidateFormData)
                .then(response => console.log(response.data))
                .catch(error => console.log(error));

        } else {
            const updateCandidateFormData = new FormData();
            updateCandidateFormData.append("firstName", candidate.firstName);
            updateCandidateFormData.append("lastName", candidate.lastName);
            updateCandidateFormData.append("email", candidate.email);
            updateCandidateFormData.append("phone", candidate.phone);
            updateCandidateFormData.append("coverLetter", candidate.coverLetter);
            updateCandidateFormData.append("jobId", candidate.jobId);
            updateCandidateFormData.append("pdfFile", pdfFile);
            // CreateCandidate(newCandidateFormData);
            httpModule.put(`/Candidate/Update/${id}`, updateCandidateFormData)
                .then(responce => console.log(responce.data))
                .catch(error => console.log(error));


        }
    }

    return (
        <div>
            <Dialog >
                <DialogTrigger><Button variant={"Primary"}>{props.button}</Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <div className='text-center'>
                            <DialogTitle>Add Candidate</DialogTitle>
                            <DialogDescription>
                                Add Candidate by filling the form below.
                            </DialogDescription>
                        </div>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="first name" className="text-right">
                                First name
                            </Label>
                            <Input
                                id="first name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                                onChange={(e) => setCandidate({ ...candidate, firstName: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="last name" className="text-right">
                                Last name
                            </Label>
                            <Input
                                id="last name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                                onChange={(e) => setCandidate({ ...candidate, lastName: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="Email"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                                onChange={(e) => setCandidate({ ...candidate, email: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Phone" className="text-right">
                                Phone
                            </Label>
                            <Input
                                id="Phone"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                                onChange={(e) => setCandidate({ ...candidate, phone: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor={props.level} className="text-right">
                                Job Title
                            </Label>
                            <Select onValueChange={(Value) => {
                                setCandidate({ ...candidate, jobId: Value })
                            }}>
                                <SelectTrigger className="w-[340px]">
                                    <SelectValue placeholder="mern stack" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {job.map((item) => (

                                            <SelectItem key={item.id} value={item.id}>{item.title}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Cover letter" className="text-right">
                                Cover letter
                            </Label>
                            <Input
                                id="Cover letter"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                                onChange={(e) => setCandidate({ ...candidate, coverLetter: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="upload cv" className="text-right">
                                upload cv
                            </Label>
                            <Input
                                id="upload cv"
                                className="col-span-3"
                                type="file"
                                onChange={(e) => setPdfFile(e.target.files ? e.target.files[0] : null)}
                            />
                        </div>
                    </div>
                    <DialogTrigger>
                        <DialogFooter>
                            <Button onClick={() => { handleOnClick(props.id) }} variant={'Primary'}>{props.name}</Button>
                        </DialogFooter>
                    </DialogTrigger>
                </DialogContent>
            </Dialog>
        </div >

    )
}

export default PopUpFormCandidate
