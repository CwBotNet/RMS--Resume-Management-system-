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
import { useState } from "react"
import { createJob } from "@/services/api/job.api"

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

    // createJob(job);
    // console.log(job);



    return (
        <div>
            <Dialog >
                <DialogTrigger><Button variant={"Primary"}>{props.button}</Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <div className='text-center'>
                            <DialogTitle>Add {props.name}</DialogTitle>
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

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor={props.lableFor} className="text-right">
                                {props.lableFor}
                            </Label>
                            <Input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                                onChange={(e) => setjob({ ...job, companyId: e.target.value })}
                            />
                        </div>

                        {/* job level */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor={props.level} className="text-right">
                                {props.level}
                            </Label>
                            <Select onValueChange={(Value) => {
                                setjob({ ...job, level: Value })
                            }}>
                                <SelectTrigger className="w-[180px]">
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
                        <Button onClick={() => { createJob(job) }} variant={'Primary'}>{props.name}</Button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </div >

    )
}

export default PopupForm
