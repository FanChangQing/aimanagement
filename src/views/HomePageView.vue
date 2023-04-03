<template>
    <div class="TableView">
        <div class="title">
            <div class="title_font">
                <div class="title_img"></div>
                <div class="title_text">
                    <img src="../assets/homeTitle.png" />
                </div>
            </div>
        </div>
        <div class="border">
            <el-row>
                <el-col :span="17">
                    <div style="display: flex; margin: 3% 10%">
                        <div class="triangle"></div>
                        <div class="border_title">选择bots</div>
                        <div>
                            <el-radio v-model="radio" label="1">客服</el-radio>
                            <el-radio v-model="radio" label="2">产品</el-radio>
                            <el-radio v-model="radio" label="3">技术</el-radio>
                            <el-radio v-model="radio" label="4">市场</el-radio>
                        </div>
                    </div>
                    <div
                        class="fileupload"
                        style="display: flex; margin: 3% 10%"
                    >
                        <div class="triangle"></div>
                        <div class="border_title">选择训练文件</div>
                        <div style="width: 100%">
                            <el-row>
                                <el-col>
                                    <el-upload
                                        class="upload_demo"
                                        ref="upload"
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :file-list="fileList"
                                        :limit="1"
                                        :on-exceed="handleExceed"
                                        :auto-upload="false"
                                    >
                                        <el-button size="small" type="primary"
                                            >选择文件</el-button
                                        >
                                    </el-upload>
                                </el-col>
                            </el-row>
                            <el-row
                                style="margin: 3% 0 3% 10%; text-align: left"
                            >
                                <el-col :span="4" style="padding-top: 5px">
                                    作者
                                </el-col>
                                <el-col :span="20">
                                    <el-input
                                        v-model="input"
                                        placeholder="请填写"
                                    ></el-input>
                                </el-col>
                            </el-row>
                            <el-row
                                style="margin: 3% 0 3% 10%; text-align: left"
                            >
                                <el-col :span="4" style="padding-top: 5px">
                                    来源
                                </el-col>
                                <el-col :span="20">
                                    <el-input
                                        v-model="input"
                                        placeholder="请填写"
                                    ></el-input>
                                </el-col>
                            </el-row>
                            <el-row
                                style="margin: 3% 0 3% 10%; text-align: left"
                            >
                                <el-col :span="4" style="padding-top: 5px">
                                    来源类型
                                </el-col>
                                <el-col :span="20" class="resource">
                                    <el-radio v-model="radio" label="1"
                                        >网页</el-radio
                                    >
                                    <el-radio v-model="radio" label="2"
                                        >PDF文件</el-radio
                                    >
                                    <el-radio v-model="radio" label="3"
                                        >WORD文件</el-radio
                                    >
                                    <el-radio v-model="radio" label="4"
                                        >makedown文件</el-radio
                                    >
                                </el-col>
                            </el-row>
                        </div>
                    </div>

                    <div
                        class="test_content"
                        style="display: flex; margin: 3% 10%"
                    >
                        <div class="triangle"></div>
                        <div class="border_title">选择训练文件</div>
                        <div style="width: 100%">
                            <el-row
                                style="margin: 0 0 3% 10%; text-align: left"
                            >
                                <el-col>
                                    <el-input
                                        type="textarea"
                                        :rows="5"
                                        placeholder="按指定格式填写文本"
                                        v-model="textarea"
                                    >
                                    </el-input>
                                </el-col>
                            </el-row>
                            <el-row
                                style="margin: 3% 0 3% 10%; text-align: left"
                            >
                                <el-col :span="4" style="padding-top: 5px">
                                    作者
                                </el-col>
                                <el-col :span="20">
                                    <el-input
                                        v-model="input"
                                        placeholder="请填写"
                                    ></el-input>
                                </el-col>
                            </el-row>
                            <el-row
                                style="margin: 3% 0 3% 10%; text-align: left"
                            >
                                <el-col :span="4" style="padding-top: 5px">
                                    来源
                                </el-col>
                                <el-col :span="20">
                                    <el-input
                                        v-model="input"
                                        placeholder="请填写"
                                    ></el-input>
                                </el-col>
                            </el-row>
                            <el-row
                                style="margin: 3% 0 3% 10%; text-align: left"
                            >
                                <el-col :span="4" style="padding-top: 5px">
                                    url地址
                                </el-col>
                                <el-col :span="20">
                                    <el-input
                                        v-model="input"
                                        placeholder="请填写"
                                    ></el-input>
                                </el-col>
                            </el-row>
                            <el-row
                                style="margin: 3% 0 3% 10%; text-align: left"
                            >
                                <el-col :span="4" style="padding-top: 5px">
                                    来源类型
                                </el-col>
                                <el-col :span="20" class="resource">
                                    <el-radio v-model="radio" label="1"
                                        >网页</el-radio
                                    >
                                    <el-radio v-model="radio" label="2"
                                        >PDF文件</el-radio
                                    >
                                    <el-radio v-model="radio" label="3"
                                        >WORD文件</el-radio
                                    >
                                    <el-radio v-model="radio" label="4"
                                        >makedown文件</el-radio
                                    >
                                </el-col>
                            </el-row>
                            <el-row
                                style="margin: 5% 0 3% 10%; text-align: left"
                            >
                                <el-button type="primary" @click="train()">{{
                                    trainButton
                                }}</el-button>
                            </el-row>
                        </div>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="progress" v-show="isTrain">
                        <div v-if="items">
                            <ul class="ul_list">
                                <li
                                    v-for="(item, index) in items"
                                    :key="index"
                                    :class="item.style"
                                >
                                    {{ item.message }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
  
  <script>
export default {
    data() {
        return {
            radio: "1",
            fileList: [],
            textarea: "",
            input: "",
            isTrain: false,
            items: [],
            trainButton: "开始训练",
        };
    },
    methods: {
        train() {
            this.isTrain = true;
            this.trainButton = "继续训练";
            this.$refs.upload.submit();
            this.itemBegin();
            this.itemUploadSuccess();
            this.itemTextSuccess();
            this.itemEnd();
        },
        itemBegin() {
            this.items.push({ message: "开始训练...", style: "li_1" });
        },
        itemEnd() {
            setTimeout(() => {
                this.items.push({ message: "训练结束", style: "li_1" });
            }, 6000);
        },
        itemUploadSuccess() {
            setTimeout(() => {
                this.items.push({
                    message: "<bots类型>模型 训练文件上传成功",
                    style: "li_2",
                });
            }, 2000);
        },
        itemTextSuccess() {
            setTimeout(() => {
                this.items.push({
                    message: "<bots类型>模型 训练文本上传成功",
                    style: "li_2",
                });
            }, 4000);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 1 个文件，本次选择了 ${
                    files.length
                } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
    },
};
</script>
  
  <style lang="scss" scoped>
.TableView {
    .title {
        height: 250px;
        display: flex;
        .title_font {
            width: 100%;
            .title_img {
                background: url("https://img.js.design/assets/img/64240053e8745177e5c7f63a.jpg#990591fb3687e4ae4d7ec3785e032f86");
                height: 250px;
                background-size: cover;
                background-position-y: -410px;
                filter: blur(2px);
            }
            .title_text {
                position: absolute;
                left: 15%;
                top: 30px;
            }
            .title_text img {
                height: 180px;
                width: 400px;
            }
        }
    }
    .title img {
        height: 300px;
        width: 300px;
    }
    .border {
        width: 70%;
        margin-left: 15%;
        height: auto;
        border-radius: 10px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
        position: fixed;
        margin-top: -10px;
        .triangle {
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 5px solid rgba(64, 158, 255, 1);
            padding-left: 20px;
            height: 1px;
            margin-top: 5px;
        }
        .border_title {
            width: 120px;
            padding-right: 20px;
            text-align: left;
        }
        .el-radio {
            margin-left: 30px;
            margin-right: 60px;
        }
        .fileupload {
            .upload_demo {
                margin-left: 50px;
                display: flex;
            }

            ::v-deep .el-upload-list {
                margin: 0px 10px;
            }
            ::v-deep .el-upload-list__item:first-child {
                margin: 0;
            }
            .resource {
                padding-top: 5px;
                ::v-deep .el-radio {
                    margin-left: 5px;
                    margin-right: 5px;
                }
            }
        }
        .test_content {
            .upload_demo {
                margin-left: 50px;
                display: flex;
            }

            ::v-deep .el-upload-list {
                margin: 0px 10px;
            }
            ::v-deep .el-upload-list__item:first-child {
                margin: 0;
            }
            .resource {
                padding-top: 5px;
                ::v-deep .el-radio {
                    margin-left: 5px;
                    margin-right: 5px;
                }
            }
        }
    }
    .progress {
        border-radius: 10px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(8, 161, 221, 1);
        width: 80%;
        height: 400px;
        margin-top: 10%;
        overflow: auto;
        .ul_list {
            width: 45%;
            text-align: left;
            .li_1 {
                color: rgba(8, 161, 221, 1);
                padding-bottom: 40px;
                list-style-type: circle;
            }
            .li_2 {
                color: rgba(0, 186, 173, 1);
                padding-bottom: 40px;
                list-style-type: circle;
            }
            .li_3 {
                color: rgba(255, 87, 51, 1);
                padding-bottom: 40px;
                list-style-type: circle;
            }
        }
    }
     ::-webkit-scrollbar {
        width: 0 !important;
    }
}
</style>