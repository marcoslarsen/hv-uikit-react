*** Setting ***
Resource         ../../_resources/accessibility.robot
Variables        ../../_resources/storybook_variables.yaml
Test Template    pa11y should not find errors
Force Tags       pa11y


*** Variables ***
${url}    ${STORYBOOK_URL}/iframe.html?id=coretabs--


*** Test Cases ***
Storybook sample tabs against WCAG2AA standard                   ${url}simpletabs
Storybook sample tabs with disabled against WCAG2AA standard     ${url}biggertabs
