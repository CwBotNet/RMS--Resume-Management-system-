"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ICreateJobDto } from "@/types/global.typing"
import { useEffect, useState } from "react"
import { ICompany } from "@/types/global.typing"
import { createJob, updateJob } from "@/services/api/job.api"
import httpModule from "@/helpers/http.module"

enum level {
    Intern,
    Junior,
    MidLevel,
    Senior,
    TeamLead,
    Cto,
    Architect
}





const key = Object.keys(level).filter((v) => isNaN(Number(v)));

const PopupForm = (props: any) => {
    const [job, setjob] = useState<ICreateJobDto>({ title: "", level: "", companyId: "" })
    const [companies, setCompanies] = useState<ICompany[]>([])


    useEffect(() => {
        ; (async () => {
            const response = await httpModule.get<ICompany[]>('/Company/GetCompany')
            const company = response.data
            setCompanies(company)
            return company

        })()
    }, [])

    const handleOnClick = (id: string, jobData: any) => {
        if (props.PostMethod == "post") {
            createJob(job);

        } else {
            updateJob(id, jobData);

        }
    }



    return (
        <div>
            <Dialog >
                <DialogTrigger><Button variant={"Primary"}>{props.button}</Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <div className='text-center'>
                            <DialogTitle>{props.name}</DialogTitle>
                            <DialogDescription>
                                Add {props.name} by filling the form below.
                            </DialogDescription>
                        </div>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="job title" className="text-right">
                                {props.name} Title
                            </Label>
                            <Input
                                id={props.name}
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                                onChange={(e) => setjob({ ...job, title: e.target.value })}
                            />
                        </div>

                        {/* company */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor={props.level} className="text-right">
                                company
                            </Label>
                            <Select onValueChange={(Value) => {
                                setjob({ ...job, companyId: Value })
                            }}>
                                <SelectTrigger className="w-[340px]">
                                    <SelectValue placeholder="google" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {companies.map((item) => (

                                            <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* job level */}
                        <div className="grid grid-cols-4 items-center gap-4 w-">
                            <Label htmlFor={props.level} className="text-right">
                                {props.level}
                            </Label>
                            <Select onValueChange={(Value) => {
                                setjob({ ...job, level: Value })
                            }}>
                                <SelectTrigger className="w-[340px]">
                                    <SelectValue placeholder="level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {key.map((key: any, index) => (

                                            <SelectItem key={index} value={key}>{key}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogTrigger>
                            <Button onClick={() => { handleOnClick(props.id, job); }} variant={'Primary'}>{props.name}</Button>
                        </DialogTrigger>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div >

    )
}

export default PopupForm
