import { Select } from "antd";
import styled from "styled-components"
import { Typography } from "../typography";

interface CustomDropdownPropsType {
    defaultValue?: string,
    headerTitle: string,
    footerTitle: string,
    onChange: (x: any) => void,
    [x: string]: any,
}
export const CustomDropdown: React.FC<CustomDropdownPropsType> = ({ defaultValue="select", headerTitle, footerTitle, onChange, ...rest }) => {
    const handleChange = (value: string) => {
        // console.log(`selected ${value}`);
        onChange(value);
    };

    return (
        <Wrapper>
            <Typography>{headerTitle}</Typography>
            <Select
                defaultValue={defaultValue}
                onChange={handleChange}
                style={{ width: '100%', height: 44 }}
                getPopupContainer={(triggerNode): any => {
                  return triggerNode.parentNode;
                }}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
            <Typography color={3}>{footerTitle}</Typography>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    .ant-select {
        width: 100%;
        
        .ant-select-selector {
            height: 44px;
            border-radius: 10px;
            border: 1px solid ${({ theme }) => theme.color.border[1]} !important;
            background-color: ${({ theme }) => theme.color.bg[1]} !important;
            color: ${({ theme }) => theme.color.text[1]};
        
            .ant-select-selection-search, .ant-select-selection-item {
                display: flex;
                align-items: center;
            }
            .ant-select-selection-item .itemValue {
                display: none;
            }
        }
        .ant-select-arrow, .ant-select-clear {
            background-color: ${({ theme }) => theme.color.bg[2]} !important;
            color: ${({ theme }) => theme.color.text[1]} !important;
        }

        .ant-select-dropdown {
            background-color: ${({ theme }) => theme.color.bg[1]} !important;
            
            .ant-select-item {
              color: ${({ theme }) => theme.color.text[1]};

              &.ant-select-item-option-selected {
                background-color: ${({ theme }) => theme.color.bg[2]} !important;
              }
            }
        }
    }
    .ant-select-single.ant-select-show-arrow .ant-select-selection-item {
        color: ${({ theme }) => theme.color.text[1]};
    }
`