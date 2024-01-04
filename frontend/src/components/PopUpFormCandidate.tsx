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


const PopUpFormCandidate = (props: any) => {
    return (
        <div>
            <Dialog>
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
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Job Id" className="text-right">
                                Job Id
                            </Label>
                            <Input
                                id="Job Id"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Job Title" className="text-right">
                                Job Title
                            </Label>
                            <Input
                                id="Job Title"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Cover letter" className="text-right">
                                Cover letter
                            </Label>
                            <Input
                                id="Cover letter"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="Cover letter" className="text-right">
                                Cover letter
                            </Label>
                            <Input
                                id="Cover letter"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
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
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant={'Primary'}>{props.name}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div >

    )
}

export default PopUpFormCandidate
