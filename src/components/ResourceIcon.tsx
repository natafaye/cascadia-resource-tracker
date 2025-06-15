import type { IconBaseProps } from "react-icons"
import type { Resource } from "../types"

type Props = {
    resource: Resource
} & IconBaseProps

export default function Icon({ resource, ...props }: Props) {
    const Component = resource.iconComponent
    return (
        <Component {...props}/>
    )
}