import React from "react";
import {
  renderMPattern,
  renderBodyFurTip,
  renderArmFurTip,
  renderShortTail,
  renderShortTailShade,
  renderLongTail,
  renderLongTailShade,
} from "./MicromeowParts";


export type MicromeowProps = {
  color: string;
  eyeColor: string;
  shadeColor?: string;
  mPattern?: string;
  furTip?: string;
  shortTail?: boolean;
  eyesClosed?: boolean;
  pose?: "sphinx" | "lowCrouch";
};

const Micromeow: React.FC<MicromeowProps> = ({
  color,
  eyeColor,
  shadeColor,
  mPattern,
  furTip, 
  shortTail,
  eyesClosed,
  pose = "sphinx"
}: MicromeowProps) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,16,13">
          <g id="body" transform="translate(6,3)">
            <g className="fill" transform="translate(0,1)">
                <rect width="6" height="1"/>
                <rect y="1" width="8" height="1"/>
                <rect y="2" width="8" height="2"/>
                {furTip && renderBodyFurTip(furTip)}
            </g>
            <g className="shade">
                <rect width="6" height="1"/>
                <rect x="7" y="2" width="1" height="3"/>
                <rect y="5" width="8" height="1"/>
                <rect x="6" y="1" width="1" height="1"/>
            </g>
          </g>

          <g id="arm" transform="translate(0,7)">
            <g className="fill">
                <rect width="1" height="1"/>
                <rect width="6" height="1"/>
                {furTip && renderArmFurTip(furTip)}
            </g>
            <g className="shade">
              <rect y="1" width="6" height="1"/>
            </g>
          </g>

          <g id="tail" transform="translate(11,5)">
            <g className="fill">
            {shortTail ? renderShortTail() : renderLongTail()}
            </g>
            <g className="shade">
            {shortTail ? renderShortTailShade() : renderLongTailShade()}
            </g>
          </g>

          <g id="head" transform={ pose == "sphinx" ? "translate(1,0)" : pose == "lowCrouch" ? "translate(1,1)" : "translate(1,0)"}>
              <g id="ear">
                <g id="earFill">
                    <g className="fill" id="earOuterFill">
                        <rect width="3" height="2" x="0" y="0"/>
                    </g>
                    <use xlinkHref="#earOuterFill" transform="translate(8,0) scale(-1,1)"/>
                    <g fill="pink" id="earInnerFill">
                        <rect width="1" height="1" x="0" y="1" opacity={0.3} filter="brightness(50%)"/>
                        <rect width="1" height="2" opacity={0.8}/>
                    </g>
                    <use xlinkHref="#earInnerFill" transform="translate(7,0) scale(-1,1)"/>
                </g>
                <g id="earShade" className="shade">
                    <rect x="2" width="1" height="1" id="earTopShade"/>
                    <use xlinkHref="#earTopShade" transform="translate(5,0) scale(1,1)"/>
                    <rect x="7" y="1" width="1" height="1" opacity={0.4}/>
                </g>
              </g>

              <g id="face" transform="translate(0,1)">
                <g id="faceFill"className="fill">
                    <rect height="1" width="1" x="4"/>
                    <rect height="3" width="1" y="1"/>
                    <rect height="1" width="1" x="1" y="4"/>
                    <rect width="3" height="3" x="1" y="1"/>
                    <rect width="2" height="2" x="2" y="4"/>
                </g>
                <use xlinkHref="#faceFill" transform="translate(8,0) scale(-1,1)"/>

                <g className="shade" transform="translate(0,0)">
                    <rect height="1" width="4" x="2" y="5"/>
                    <rect height="1" width="1" x="6" y="4"/>
                    <rect height="4" width="1" x="7"/>
                </g>

                { eyesClosed ?
                    <g id="eye" transform="translate(1,3)">
                        <rect width="2" height="0.5" fill="gray"/>
                    </g> 
                    : <g id="eye" transform="translate(1,2)">
                        <rect width="1" height="1" x="1" className="eyeColor" filter={`brightness(50%)`}/>
                        <rect width="1" height="1" x="1" y="1" className="eyeColor"/>
                        <rect width="1" height="1" x="1" y="2" fill="pink" opacity={0.2}/>
                    </g>
                }
                <use xlinkHref="#eye" transform="translate(8,0) scale(-1,1)"/>
              </g>

              {mPattern && renderMPattern(mPattern)}

          </g>
      </svg>
      <style>{`
        .fill {
            fill: ${color};
            stroke: ${color};
            stroke-width: 0.1;
        }

        .shade {
            fill: ${shadeColor ?? color};
            filter: ${shadeColor ?? `brightness(85%)`};
            stroke: ${shadeColor ?? color};
            stroke-width: 0.1;
            stroke-filter: ${shadeColor ?? `brightness(85%)`};
        }

        .eyeColor {
            fill: ${eyeColor};
            stroke: ${eyeColor};
            stroke-width: 0.1;
        }
      `}</style>
      </>
  )
}

export default Micromeow;