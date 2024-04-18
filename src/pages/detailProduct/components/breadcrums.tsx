import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Breadcrums() {
  return (
    <>
      <Breadcrumb
        spacing="8px"
        position="relative"
        top="20px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/category">Category</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/category">Brands</BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/category">Chevrolet</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default Breadcrums;
