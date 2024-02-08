import SampleSideMenu from "@/components/sideMenu";
import React from "react";
import Buyselecter from "@/components/buyselecter";

    export default function buy(props) {
        return (
          <>
              <SampleSideMenu menutitle="購入方法選択" />
              <Buyselecter></Buyselecter>
          </>
        )
      }