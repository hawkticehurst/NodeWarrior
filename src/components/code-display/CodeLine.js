import React, {useState} from 'react';
import CodeHighlight from './CodeHighlight';
import TooltipContainer from '../common/TooltipContainer';

/**
 * Required Props:
 * code {String} - The line of code, i.e. "int x = 5"
 * language {String} - "java", "javascript", etc
 * lineNumber {number} - the line number in the code
 *
 * Optional Props:
 * onChevronClick {function} - Function called when chevron is clicked. If not present, no chevron
 * isCollapsed {Boolean} - Defaults to false
 * isHidden {Boolean} - Defaults to false, if true it shows as "grayed out". Must be true for chevron
 * isSelected {Boolean} - defaults to false, true to show code as selected
 * tooltip {String} - String to show as a tooltip with the line.
 */
function CodeLine(props) {
  const {code, language, lineNumber, isCollapsed, onChevronClick, isHidden, isSelected, tooltip} = props;
  const [codeEllipses, setCodeEllipses] = useState(onChevronClick != null && isHidden && isCollapsed ? '...}' : '');

  const clickChevron = () => {
    if (codeEllipses === '') {
      setTimeout(() => setCodeEllipses('...}'), 500);
    } else {
      setCodeEllipses('');
    }
    onChevronClick();
  };

  const hasChevron = onChevronClick != null && isHidden;
  const chevron = hasChevron ?
  <span
    className={isCollapsed ? "chevron right" : "chevron bottom"}
    onClick={clickChevron} />
  : null;

  const lineClass = isSelected ? "code-line selected-line" : "code-line";

  return (
    <div className={lineClass}>
      <div className="line-number">
        {lineNumber}
      </div>
      <div className={hasChevron ? 'chevron-container' : ''}>
        <div className="chevron-offset">
          {chevron}
        </div>
      </div>
      {
        tooltip != null ? (
          <TooltipContainer>
            <span>{tooltip}</span>
          </TooltipContainer>
        ) : null
      }
      <div className="code-content">
        <CodeHighlight isHidden={isHidden} isSelected={isSelected} language={language}>
          {code + codeEllipses}
        </CodeHighlight>
      </div>
    </div>
  );
}

export default CodeLine;
