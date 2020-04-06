# DropZone

```tsx
import { DropZone } from 'smarthr-ui'

<DropZone onDropFile={onDropFile} onSelectFile={onSelectFile} accept="image/*">
  <p>Drop your files here.</p>
</DropZone>
```

## props

| Name         | Required | Type         | DefaultValue | Description                                                                                                                |
| ------------ | -------- | ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| onDropFile   | true     | **function** | -            | Fired when files are dropped.<br><br>function: (e: DragEvent<HTMLDivElement>) => void                                      |
| onSelectFile | true     | **function** | -            | Fired when files are selected through the button.<br><br>function: (e: DragEvent<HTMLInputElement>) => void                |
| accept       | -        | **string**   | ''           | One or more unique file type specifiers describing file types to allow to select.<br><b>(Not affect to dropping files)</b> |

## get files data

```tsx
const onDropFile = (e: DragEvent<HTMLDivElement>) => {
  console.log(e.dataTransfer.files)
}

const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.files)
}
```