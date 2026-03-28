import { Heading1, Text } from "../comp/text-comp"
import { PageTemplate } from "../template/page"

export const AboutMePage = () => {
    return (
        <PageTemplate>
            <Heading1>
                About Me
            </Heading1>
            <div>
                <figure className="w-72">
                    <img
                        className="w-full rounded-md"
                        src="/photo/austria-march-2023.jpg"
                        alt="Austria trip March 2023"
                    />
                    <figcaption className="text-sm text-gray-500 mt-2 text-center">
                        (First week in Austria, March 2023)
                    </figcaption>
                </figure>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A pariatur error, veritatis temporibus commodi obcaecati similique doloribus minus necessitatibus eius voluptas, aut repellat ad quis at, unde cum aliquid. Tempore, libero exercitationem nihil necessitatibus recusandae unde ut itaque molestiae est. Beatae dolores corporis magnam saepe laudantium architecto sint eveniet a, quos voluptatum voluptatibus, reiciendis laborum accusamus eligendi ad. Aperiam, perspiciatis. Perferendis consequatur sequi magnam explicabo ex, atque earum? Atque quasi, impedit dolore eius cum nobis reiciendis! Quas in, ea velit repellendus molestias magni impedit laudantium aperiam molestiae itaque laboriosam, ipsa consequuntur ab quae nam? Dolorum sed reiciendis, similique quod et culpa aliquid omnis aliquam beatae praesentium suscipit consectetur aperiam qui provident dolores libero sit quisquam ea, fuga voluptate recusandae id.
                </Text>
            </div>
        </PageTemplate>
    )
}
