const ExampleSankey = () => {
  return (
    <svg height="600" width="800" xmlns="http://www.w3.org/2000/svg">
      <title>Your Diagram Title</title>

      <rect height="600" width="800" fill="#ffffff"></rect>
      <g transform="translate(8,18)">
        <g id="sankey_flows">
          <path
            id="flow2"
            d="M9 364.68942C60.65673 364.68942 60.65673 368.10969 112.31346 368.10969"
            fill="none"
            stroke-width="387.78061"
            stroke="#4e79a7"
            opacity="0.45"
          >
            <title>Jobs Applied to → No Reply: 90</title>
          </path>
          <path
            id="flow1"
            d="M9 116.9407C263.12691 116.9407 263.12691 139.78356 517.25382 139.78356"
            fill="none"
            stroke-width="107.71684"
            stroke="#4e79a7"
            opacity="0.45"
          >
            <title>Jobs Applied to → Rejection: 25</title>
          </path>
          <path
            id="flow0"
            d="M9 45.84759C59.65673 45.84759 59.65673 17.23469 110.31346 17.23469"
            fill="none"
            stroke-width="34.46939"
            stroke="#4e79a7"
            opacity="0.45"
          >
            <title>Jobs Applied to → Reply: 8</title>
          </path>
          <path
            id="flow3"
            d="M119.31346 19.38903C171.47018 19.38903 171.47018 106.68532 223.62691 106.68532"
            fill="none"
            stroke-width="30.16071"
            stroke="#f28e2c"
            opacity="0.45"
          >
            <title>Reply → First Interview: 7</title>
          </path>
          <path
            id="flow7"
            d="M232.62691 104.53099C374.94037 104.53099 374.94037 77.3078 517.25382 77.3078"
            fill="none"
            stroke-width="17.23469"
            stroke="#e15759"
            opacity="0.45"
          >
            <title>First Interview → Rejection: 4</title>
          </path>
          <path
            id="flow4"
            d="M119.31346 2.15434C318.28364 2.15434 318.28364 66.53611 517.25382 66.53611"
            fill="none"
            stroke-width="4.30867"
            stroke="#f28e2c"
            opacity="0.45"
          >
            <title>Reply → Rejection: 1</title>
          </path>
          <path
            id="flow5"
            d="M232.62691 93.7593C291.78364 93.7593 291.78364 2.15434 350.94037 2.15434"
            fill="none"
            stroke-width="4.30867"
            stroke="#59a14f"
            opacity="0.45"
          >
            <title>First Interview → No Task Required: 1</title>
          </path>
          <path
            id="flow6"
            d="M232.62691 115.30267C375.24538 115.30267 375.24538 211.21301 517.86385 211.21301"
            fill="none"
            stroke-width="4.30867"
            stroke="#59a14f"
            opacity="0.45"
          >
            <title>First Interview → Rejected by Me: 1</title>
          </path>
          <path
            id="flow8"
            d="M359.94037 2.15434C438.5971 2.15434 438.5971 62.22744 517.25382 62.22744"
            fill="none"
            stroke-width="4.30867"
            stroke="#e15759"
            opacity="0.45"
          >
            <title>No Task Required → Rejection: 1</title>
          </path>
          <path
            id="flow9"
            d="M458.25382 353.54632C509.91055 353.54632 509.91055 309.54647 561.56728 309.54647"
            fill="none"
            stroke-width="4.30867"
            stroke="#ff9da7"
            opacity="0.45"
          >
            <title>Second Interview → Waiting for Final Interview: 1</title>
          </path>
          <path
            id="flow10"
            d="M345.0055 312.27168C397.12966 312.27168 397.12966 353.54632 449.25382 353.54632"
            fill="none"
            stroke-width="4.30867"
            stroke="#af7aa1"
            opacity="0.45"
          >
            <title>Technical Task → Second Interview: 1</title>
          </path>
          <path
            id="flow11"
            d="M232.62691 119.61134C284.31621 119.61134 284.31621 312.27168 336.0055 312.27168"
            fill="none"
            stroke-width="4.30867"
            stroke="#59a14f"
            opacity="0.45"
          >
            <title>First Interview → Technical Task: 1</title>
          </path>
        </g>
        <g id="sankey_nodes">
          <g class="node">
            <rect
              id="r0"
              class="for_r0"
              x="0"
              y="28.61289"
              height="529.96684"
              width="9"
              fill="#4e79a7"
              fill-opacity="1"
            >
              <title>Jobs Applied to: 123</title>
            </rect>
          </g>
          <g class="node">
            <rect
              id="r1"
              class="for_r1"
              x="112.31346"
              y="0"
              height="34.46939"
              width="9"
              fill="#f28e2c"
              fill-opacity="1"
              transform="translate(-2,0)"
            >
              <title>Reply: 8</title>
            </rect>
          </g>
          <g class="node">
            <rect
              id="r2"
              class="for_r2"
              x="449.25382"
              y="34.0731"
              height="133.56888"
              width="9"
              fill="#e15759"
              fill-opacity="1"
              transform="translate(68,26)"
            >
              <title>Rejection: 31</title>
            </rect>
          </g>
          <g class="node">
            <rect
              id="r3"
              class="for_r3"
              x="112.31346"
              y="174.21939"
              height="387.78061"
              width="9"
              fill="#76b7b2"
              fill-opacity="1"
            >
              <title>No Reply: 90</title>
            </rect>
          </g>
          <g class="node">
            <rect
              id="r4"
              class="for_r4"
              x="224.62691"
              y="40.60497"
              height="30.16071"
              width="9"
              fill="#59a14f"
              fill-opacity="1"
              transform="translate(-1,51)"
            >
              <title>First Interview: 7</title>
            </rect>
          </g>
          <g class="node">
            <rect
              id="r5"
              class="for_r5"
              x="336.94037"
              y="0"
              height="4.30867"
              width="9"
              fill="#76b7b2"
              fill-opacity="1"
              transform="translate(14,0)"
            >
              <title>No Task Required: 1</title>
            </rect>
          </g>
          <g class="node">
            <rect
              id="r6"
              class="for_r6"
              x="336.94037"
              y="144.05867"
              height="4.30867"
              width="9"
              fill="#edc949"
              fill-opacity="1"
              transform="translate(180.92349,65)"
            >
              <title>Rejected by Me: 1</title>
            </rect>
          </g>
          <g class="node">
            <rect
              id="r7"
              class="for_r7"
              x="449.25382"
              y="307.39198"
              height="4.30867"
              width="9"
              fill="#af7aa1"
              fill-opacity="1"
              transform="translate(0,44)"
            >
              <title>Second Interview: 1</title>
            </rect>
          </g>
          <g class="node">
            <rect
              id="r8"
              class="for_r8"
              x="561.56728"
              y="307.39213"
              height="4.30867"
              width="9"
              fill="#ff9da7"
              fill-opacity="1"
            >
              <title>Waiting for Final Interview: 1</title>
            </rect>
          </g>
          <g class="node">
            <rect
              id="r9"
              class="for_r9"
              x="336.94037"
              y="288.11735"
              height="4.30867"
              width="9"
              fill="#9c755f"
              fill-opacity="1"
              transform="translate(-0.93487,22)"
            >
              <title>Technical Task: 1</title>
            </rect>
          </g>
        </g>
        <g
          id="sankey_labels"
          font-family="sans-serif"
          font-size="16px"
          font-weight="400"
          fill="#000000"
        >
          <text
            text-anchor="middle"
            x="392"
            y="577"
            font-size="11px"
            font-weight="400"
            fill="rgb(127, 127, 127)"
          >
            Made with SankeyMATIC
          </text>
          <rect
            id="label0_bg"
            class="for_r0"
            x="10.63385"
            y="281.42032"
            width="153.84888"
            height="23.36"
            rx="4"
            fill="#fff"
            fill-opacity="0.55"
            stroke="none"
            stroke-width="0"
            stroke-opacity="0"
          ></rect>
          <text
            id="label0"
            class="for_r0"
            text-anchor="start"
            x="15.30197"
            y="293.59631"
            dy="5.10400011062622"
          >
            Jobs Applied to: 123
          </text>
          <rect
            id="label1_bg"
            class="for_r1"
            x="122.94731"
            y="5.05869"
            width="68.43638"
            height="23.36"
            rx="4"
            fill="#fff"
            fill-opacity="0.55"
            stroke="none"
            stroke-width="0"
            stroke-opacity="0"
            transform="translate(-2,0)"
          ></rect>
          <text
            id="label1"
            class="for_r1"
            text-anchor="start"
            x="127.61543"
            y="17.23469"
            dy="5.10400011062622"
            transform="translate(-2,0)"
          >
            Reply: 8
          </text>
          <rect
            id="label2_bg"
            class="for_r2"
            x="459.88763"
            y="88.68154"
            width="103.13638"
            height="23.36"
            rx="4"
            fill="#fff"
            fill-opacity="0.55"
            stroke="none"
            stroke-width="0"
            stroke-opacity="0"
            transform="translate(68,26)"
          ></rect>
          <text
            id="label2"
            class="for_r2"
            text-anchor="start"
            x="464.55579"
            y="100.85754"
            dy="5.10400011062622"
            transform="translate(68,26)"
          >
            Rejection: 31
          </text>
          <rect
            id="label3_bg"
            class="for_r3"
            x="122.94731"
            y="355.93369"
            width="102.23638"
            height="23.36"
            rx="4"
            fill="#fff"
            fill-opacity="0.55"
            stroke="none"
            stroke-width="0"
            stroke-opacity="0"
          ></rect>
          <text
            id="label3"
            class="for_r3"
            text-anchor="start"
            x="127.61543"
            y="368.10969"
            dy="5.10400011062622"
          >
            No Reply: 90
          </text>
          <rect
            id="label4_bg"
            class="for_r4"
            x="235.26075"
            y="43.50932"
            width="127.09888"
            height="23.36"
            rx="4"
            fill="#fff"
            fill-opacity="0.55"
            stroke="none"
            stroke-width="0"
            stroke-opacity="0"
            transform="translate(-1,51)"
          ></rect>
          <text
            id="label4"
            class="for_r4"
            text-anchor="start"
            x="239.92888"
            y="55.68533"
            dy="5.10400011062622"
            transform="translate(-1,51)"
          >
            First Interview: 7
          </text>
          <rect
            id="label5_bg"
            class="for_r5"
            x="347.57421"
            y="-10.02166"
            width="154.41138"
            height="23.36"
            rx="4"
            fill="#fff"
            fill-opacity="0.55"
            stroke="none"
            stroke-width="0"
            stroke-opacity="0"
            transform="translate(14,0)"
          ></rect>
          <text
            id="label5"
            class="for_r5"
            text-anchor="start"
            x="352.24234"
            y="2.15434"
            dy="5.10400011062622"
            transform="translate(14,0)"
          >
            No Task Required: 1
          </text>
          <rect
            id="label6_bg"
            class="for_r6"
            x="347.57421"
            y="134.03702"
            width="138.69888"
            height="23.36"
            rx="4"
            fill="#fff"
            fill-opacity="0.55"
            stroke="none"
            stroke-width="0"
            stroke-opacity="0"
            transform="translate(180.92349,65)"
          ></rect>
          <text
            id="label6"
            class="for_r6"
            text-anchor="start"
            x="352.24234"
            y="146.21301"
            dy="5.10400011062622"
            transform="translate(180.92349,65)"
          >
            Rejected by Me: 1
          </text>
          <rect
            id="label7_bg"
            class="for_r7"
            x="459.88763"
            y="297.37034"
            width="150.26138"
            height="23.36"
            rx="4"
            fill="#fff"
            fill-opacity="0.55"
            stroke="none"
            stroke-width="0"
            stroke-opacity="0"
            transform="translate(0,44)"
          ></rect>
          <text
            id="label7"
            class="for_r7"
            text-anchor="start"
            x="464.55579"
            y="309.54632"
            dy="5.10400011062622"
            transform="translate(0,44)"
          >
            Second Interview: 1
          </text>
          <rect
            id="label8_bg"
            class="for_r8"
            x="571.40115"
            y="297.37049"
            width="211.79888"
            height="23.36"
            rx="4"
            fill="#fff"
            fill-opacity="0.55"
            stroke="none"
            stroke-width="0"
            stroke-opacity="0"
          ></rect>
          <text
            id="label8"
            class="for_r8"
            text-anchor="start"
            x="576.86925"
            y="309.54647"
            dy="5.10400011062622"
          >
            Waiting for Final Interview: 1
          </text>
          <rect
            id="label9_bg"
            class="for_r9"
            x="347.57421"
            y="278.09568"
            width="131.28638"
            height="23.36"
            rx="4"
            fill="#fff"
            fill-opacity="0.55"
            stroke="none"
            stroke-width="0"
            stroke-opacity="0"
            transform="translate(-0.93487,22)"
          ></rect>
          <text
            id="label9"
            class="for_r9"
            text-anchor="start"
            x="352.24234"
            y="290.27168"
            dy="5.10400011062622"
            transform="translate(-0.93487,22)"
          >
            Technical Task: 1
          </text>
        </g>
      </g>
    </svg>
  );
};

export default ExampleSankey;
