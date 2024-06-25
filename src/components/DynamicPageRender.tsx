import React from "react"
import PageTitle from "./PageTitle"

interface DynamicPageRendererProps {
    Component: React.ComponentType;
    title: string;
}

export const DynamicPageRenderer: React.FC<DynamicPageRendererProps> = ({ title, Component }) => {
    return (
        <>
            <PageTitle title={title} />
            <Component />
        </>
    )
}

export default DynamicPageRenderer