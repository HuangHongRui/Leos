import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';
/**
 * 下拉选择框
 * @param [{name, path}] 名称|路由
 */
export default (params, event) => {
    return (
      <div className="dropdown" onClick={event}>
        {
          params.map((item, idx) => (
            <Link
              key={idx}
              className="item"
              to={item.path}>
              {item.name}
            </Link>))
        }
      </div>
    )
}