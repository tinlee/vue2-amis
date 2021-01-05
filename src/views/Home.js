/*
 * @Author: sky.li
 * @LastEditors: sky.li
 * @Description:
 * @可以输入预定的版权声明、个性签名、空行等
 */

import schema2component from "../lib/utils/schema2component";

const schema = {
  type: "page",
  title: "会员列表",
  body: {
    type: "card",
    body: [
      {
        label: "新增",
        type: "button",
        actionType: "dialog",
        level: "primary",
        dialog: {
          title: "新增表单",
          body: {
            type: "form",
            api: "post:https://houtai.baidu.com/api/sample",
            controls: [
              {
                type: "text",
                name: "engine",
                label: "Engine"
              },
              {
                type: "text",
                name: "browser",
                label: "Browser"
              }
            ]
          }
        }
      },
      {
        type: "crud",
        api: "/list/index",
        filter: {
          title: "条件搜索",
          controls: [
            {
              type: "text",
              label: "关键字",
              name: "keywords",
              placeholder: "通过关键字搜索"
            }
          ]
        },
        columns: [
          {
            name: "id",
            label: "ID"
          },
          {
            name: "title",
            label: "title"
          },
          {
            name: "content",
            label: "content"
          }
        ]
      }
    ]
  }
};

export default schema2component(schema);
