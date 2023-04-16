import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px 50px 20px;
    height: -webkit-calc(100% - 90px);
    height: -moz-calc(100% - 90px);
    height: calc(100% - 90px);
    overflow: auto;

    .ant-upload-wrapper {
        display: flex;
        position: relative;
        .ant-upload-list {
            width: 100%;
            .ant-upload {
                width: 100%;
                height: 44px;
                border: 0;
            }
            
            .ant-upload-list-item {
                position: absolute;
                width: 100%;
                margin: 0;
                padding: 0 20px;
                height: 44px;
                background-color: ${({ theme }) => theme.color.bg[1]}; 
                border: 1px solid ${({ theme }) => theme.color.border[1]};
                border-radius: 10px;

                .ant-upload-list-item-name {
                    color: ${({ theme }) => theme.color.text[1]};
                }
            }
        }
    }

    .updated-file {
      width: 100%;
      height: 44px;
      border: 1px solid ${({ theme }) => theme.color.border[1]};
      border-radius: 10px;
    }
`
