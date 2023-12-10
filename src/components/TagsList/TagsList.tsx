import React, {memo} from "react";
import {Space} from "antd";
import {useSelector} from "react-redux";
import {Tags} from "./Tag/Tags";
import {tagsSelector} from "../../store/selectors";

export const TagsList = memo(() => {
  const tags = useSelector(tagsSelector)
  
  return <Space size={[0, 8]} wrap>
    {tags.map((el: string) => <Tags key={el} tag={el}/>)}
  </Space>
})
