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


const PopupForm = (props: any) => {
    return (
        <div>
            <Dialog >
                <DialogTrigger><Button variant={"Primary"}>Add {props.name} +</Button></DialogTrigger>
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
                            />
                        </div>

                        {/* job level */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor={props.level} className="text-right">
                                {props.level}
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
                        <Button variant={'Primary'}>Add {props.name}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div >

    )
}

export default PopupForm
