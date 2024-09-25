import { UploadFileCard } from "../../components/Cards/UploadCard/UploadCard";

export default {
    title: "components/Cards/Upload File Card",
    component: UploadFileCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        fileUpload: { control: { type: 'boolean' } }
    },
}

const Template = (args) => <UploadFileCard {...args} />

export const Default = Template.bind({})

Default.args = {
    fileUpload: false
}

export const FileUploaded = Template.bind({})

FileUploaded.args = {
    fileUpload: true
}