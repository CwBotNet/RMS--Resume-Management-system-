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

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from "react"
import { ICreateCompanyDto } from "@/types/global.typing"
import { createCompany, updateCompany } from "@/services/api/company.api"


const PopUpFormCompany = (props: any) => {
    const [company, setCompany] = useState<ICreateCompanyDto>({ name: "", size: "" })

    const handleOnClick = (id: string, updateComapny: any) => {
        if (props.PostMethod == "post") {
            createCompany(company)
        } else {
            updateCompany(id, updateComapny);
        }
    }

    return (
        <div>
            <Dialog >
                <DialogTrigger><Button variant={"Primary"}>{props.button}</Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <div className='text-center'>
                            <DialogTitle>Add Company</DialogTitle>
                            <DialogDescription>
                                Add companys by filling the form below.
                            </DialogDescription>
                        </div>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="company name" className="text-right">
                                Company name
                            </Label>
                            <Input
                                id="company name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                                onChange={(e) => { setCompany({ ...company, name: e.target.value }) }}
                            />
                        </div>

                        {/* company size */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="company size" className="text-right">
                                Company Size
                            </Label>
                            <Select onValueChange={(value) => {
                                setCompany({ ...company, 'size': value })
                            }}>
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
                    <DialogTrigger>
                        <DialogFooter>
                            <Button onClick={() => { handleOnClick(props.id, company); }} variant={'Primary'}>{props.name}</Button>
                        </DialogFooter>
                    </DialogTrigger>
                </DialogContent>
            </Dialog>
        </div >

    )
}

export default PopUpFormCompany
