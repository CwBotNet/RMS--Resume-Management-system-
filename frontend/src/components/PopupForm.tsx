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
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useNavigate } from "react-router-dom"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ICreateJobDto } from "@/types/global.typing"
import httpModule from "@/helpers/http.module"
import { useState } from "react"

enum level {
    Small,
    Medium,
    Large
}


const PopupForm = (props: any) => {
    const [job, setjob] = useState<ICreateJobDto>({ title: "", level: "", companyId: "" })


    // create

    const handelCreateEvent = async () => {
        const redirect = useNavigate();

        try {
            const responce = await httpModule.post<ICreateJobDto>("/Job/CreateJob", job)
            setjob(responce.data)
            alert("Job is created")
            console.log(job);
            redirect('/Job')
        } catch (error) {
            console.log(error);
        }
    }
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
                            <Select
                                value={job.level}
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="small">Small</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="large">Large</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handelCreateEvent} variant={'Primary'}>{props.name}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div >

    )
}

export default PopupForm
