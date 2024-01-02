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


const PopUpFormCompany = () => {
    return (
        <div>
            <Dialog >
                <DialogTrigger><Button variant={"Primary"}>Add Comapny</Button></DialogTrigger>
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
                            />
                        </div>

                        {/* company size */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="company size" className="text-right">
                                Company Size
                            </Label>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant={'Primary'}>Add Company</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div >

    )
}

export default PopUpFormCompany
