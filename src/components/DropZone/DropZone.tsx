import React, { DragEvent, ChangeEvent, useCallback } from 'react'
import styled, { css } from 'styled-components'

import { Theme } from '../../hooks/useTheme'
import { useTheme } from '../../hooks/useTheme'
import { isTouchDevice } from '../../libs/ua'
import { Icon } from '../Icon'

interface DropZoneProps {
  onDropFile: (e: DragEvent<HTMLDivElement>) => void
  onSelectFile: (e: ChangeEvent<HTMLInputElement>) => void
  accept?: string
}

const overrideEventDefault = (e: DragEvent<HTMLDivElement>) => {
  e.preventDefault()
  e.stopPropagation()
}

export const DropZone: React.FC<DropZoneProps> = ({
  children,
  onDropFile,
  onSelectFile,
  accept = '',
}) => {
  const theme = useTheme()

  const onDropFileCallback = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      overrideEventDefault(e)
      onDropFile(e)
    },
    [onDropFile],
  )

  return (
    <Wrapper theme={theme} onDrop={onDropFileCallback} onDragOver={overrideEventDefault}>
      {children}
      <UploadButton theme={theme}>
        <FileIcon theme={theme} size={14} name="fa-folder-open" />
        ファイルを選択
        <input type="file" multiple accept={accept} onChange={onSelectFile} />
      </UploadButton>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ theme: Theme }>`
  ${({ theme }) => {
    const { palette, frame, size } = theme
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: ${size.pxToRem(size.space.L)};
      border: ${frame.border.default};
      background-color: ${palette.COLUMN};
    `
  }}
`

const UploadButton = styled.label<{ theme: Theme }>`
  ${({ theme }) => {
    const { palette, frame, size, interaction } = theme
    return css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: auto;
      height: 40px;
      padding: 0 ${size.pxToRem(size.space.XS)};
      box-sizing: border-box;
      border: ${frame.border.default};
      border-radius: ${frame.border.radius.m};
      font-family: inherit;
      font-weight: bold;
      font-size: ${size.pxToRem(size.font.TALL)};
      color: ${palette.TEXT_BLACK};
      background-color: #fff;
      cursor: pointer;
      transition: ${isTouchDevice ? 'none' : `all ${interaction.hover.animation}`};
      &:hover {
        background-color: ${palette.hoverColor('#fff')};
      }
      &[disabled] {
        color: ${palette.disableColor(palette.TEXT_BLACK)};
        background-color: ${palette.disableColor('#fff')};
      }
      input {
        display: none;
      }
    `
  }}
`

const FileIcon = styled(Icon)<{ theme: Theme }>`
  ${({ theme }) => {
    const { pxToRem, space } = theme.size
    return css`
      margin-right: ${pxToRem(space.XXS)};
    `
  }}
`
